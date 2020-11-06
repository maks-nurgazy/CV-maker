<?php

namespace App\Controller;

use App\Repository\ResumeRepository;
use Doctrine\ORM\EntityManagerInterface;
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
    public function write(Request $request):Response
    {

        /** @var UploadedFile $uploadedFile */
        $uploadedFile = $request->files->get("avatarImage");
        $destination = $this->getParameter('kernel.project_dir').'/public/uploads';

        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        $newFilename = Urlizer::$originalFilename.'-'.uniqid().'-'.$uploadedFile->guessExtension();

        dump($uploadedFile->move($destination,$newFilename));

//        $data = [
//            "firstName"=>$request->get("firstName"),
//            "lastName"=>$request->get("lastName"),
//            "birthday"=>$request->get("birthday"),
//            "email"=>$request->get("email"),
//            "phone"=>$request->get("phone"),
//            "address"=>$request->get("address"),
//            "jobTitle"=>$request->get("jobTitle"),
//            "typeOfEmployment"=>$request->get("typeOfEmployment"),
//            "avatarImage"=>$request->get("avatarImage")->getData(),
//        ];

        return $this->json(["hello"=>"maks"]);
    }


}
