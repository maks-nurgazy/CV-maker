<?php

namespace App\Controller;

use App\Repository\ResumeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/resume", name="resume")
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
     * @Route("/read", name="resume")
     */
    public function index(): Response
    {
        $resumes = $this->resumeRepository->findAll();

        $arrayOfResumes = [];
        foreach ($resumes as $resume){
            $arrayOfResumes[] = $resume->toArray();
        }
        return $this->json($arrayOfResumes);

    }
}
