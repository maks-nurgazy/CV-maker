<?php

namespace App\Controller;

use App\Entity\StackTechnology;
use App\Repository\ResumeRepository;
use App\Entity\Resume;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Gedmo\Sluggable\Util\Urlizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/resume", name="api_resume")
 */
class ResumeController extends AbstractController
{

    private $entityManager;
    private $resumeRepository;

    public function __construct(EntityManagerInterface $entityManager, ResumeRepository $resumeRepository)
    {
        $this->entityManager = $entityManager;
        $this->resumeRepository = $resumeRepository;
    }

    /**
     * @Route("/read", name="api_resume_read")
     */
    public function read(): Response
    {
        $resumes = $this->resumeRepository->findAll();

        $arrayOfResumes = [];
        foreach ($resumes as $resume){
            $stackTechnologies = $resume->getStackTechnologies();
            $arrayOfTechnology = [];
            foreach ($stackTechnologies as $technology){
                $arrayOfTechnology[] = $technology->getName();
            }
            $resumeArray = $resume->toArray();
            $resumeArray['stackTechnologies'] = $arrayOfTechnology;
            $arrayOfResumes[] = $resumeArray;
        }
        return $this->json($arrayOfResumes);
    }

    /**
     * @Route("/post", name="api_resume_post", methods={"POST"})
     */
    public function write(Request $request, UploaderHelper $uploaderHelper):Response
    {

        $entityManager = $this->getDoctrine()->getManager();

        $resume = new Resume();
        $stackTechnology = new StackTechnology();

        /** @var UploadedFile $uploadedFile */
        $uploadedFile = $request->files->get("avatarImage");


        if ($uploadedFile){
            $newFilename = $uploaderHelper->uploadAvatarImage($uploadedFile);
            $resume->setImage($newFilename);
        }
        $resume->setFirstName($request->get("firstName"));
        $resume->setLastName($request->get("lastName"));
        $resume->setPhone($request->get("phone"));
        $resume->setEmail($request->get("email"));
        $resume->setBirthday("16/04/1999");
        $resume->setAddress($request->get("address"));
        $resume->setExperience("Yes");
        $resume->setJobTitle($request->get("jobTitle"));
        $resume->setTypeOfEmployment($request->get("typeOfEmployment"));
        $stackTechnology->setName("Music");
        $stackTechnology->addResume($resume);

        $entityManager->persist($resume);
        $entityManager->persist($stackTechnology);

        $entityManager->flush();

        return $this->json(["success"=>"saved"]);
    }

}
