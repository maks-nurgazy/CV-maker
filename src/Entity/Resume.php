<?php

namespace App\Entity;

use App\Repository\ResumeRepository;
use Doctrine\ORM\Mapping as ORM;

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
     * @ORM\Column(type="blob", nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="array")
     */
    private $stackTechnologies = [];

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

    public function getImage()
    {
        return $this->image;
    }

    public function setImage($image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getStackTechnologies(): ?array
    {
        return $this->stackTechnologies;
    }

    public function setStackTechnologies(array $stackTechnologies): self
    {
        $this->stackTechnologies = $stackTechnologies;

        return $this;
    }

    public function toArray()
    {
        return ['id' => $this->id, 'firstName'=>$this->firstName,
            'lastName'=>$this->lastName,'address'=>$this->address
            ,'email'=>$this->email, 'jobTitle'=>$this->jobTitle,
            'typeOfEmployment'=>$this->typeOfEmployment,
            'birthday'=>$this->birthday,'phone'=>$this->phone];
//            'image'=>$this->image,'stackTechnologies'=>$this->stackTechnologies];
    }


}
