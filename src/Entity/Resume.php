<?php

namespace App\Entity;

use App\Repository\ResumeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;

/**
 * @ORM\Entity(repositoryClass=ResumeRepository::class)
 */
class Resume
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $experience;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $birthday;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $typeOfEmployment;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $jobTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\ManyToMany(targetEntity=StackTechnology::class, inversedBy="resumes")
     * @JoinTable(name="resume_stack_technology",
     *     joinColumns={@JoinColumn(name="resume_id", referencedColumnName="id")},
     *     inverseJoinColumns={@JoinColumn(name="stack_technology_id", referencedColumnName="id")}
     * )
     */
    private $stackTechnologies;


    public function __construct()
    {
        $this->stackTechnologies = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getExperience(): ?string
    {
        return $this->experience;
    }

    public function setExperience(string $experience): self
    {
        $this->experience = $experience;

        return $this;
    }

    public function getBirthday(): ?string
    {
        return $this->birthday;
    }

    public function setBirthday(string $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getTypeOfEmployment(): ?string
    {
        return $this->typeOfEmployment;
    }

    public function setTypeOfEmployment(string $typeOfEmployment): self
    {
        $this->typeOfEmployment = $typeOfEmployment;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getJobTitle(): ?string
    {
        return $this->jobTitle;
    }

    public function setJobTitle(string $jobTitle): self
    {
        $this->jobTitle = $jobTitle;

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this->id, 'firstName'=>$this->firstName,
            'lastName'=>$this->lastName,'address'=>$this->address
            ,'email'=>$this->email, 'jobTitle'=>$this->jobTitle,
            'typeOfEmployment'=>$this->typeOfEmployment,'experience'=>$this->experience,
            'birthday'=>$this->birthday,'phone'=>$this->phone,
            'image'=>$this->image];
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection|StackTechnology[]
     */
    public function getStackTechnologies(): Collection
    {
        return $this->stackTechnologies;
    }

    public function addStackTechnology(StackTechnology $stackTechnology): self
    {
        if (!$this->stackTechnologies->contains($stackTechnology)) {
            $this->stackTechnologies[] = $stackTechnology;
        }
        return $this;
    }

    public function removeStackTechnology(StackTechnology $stackTechnology): self
    {
        $this->stackTechnologies->removeElement($stackTechnology);

        return $this;
    }


}
