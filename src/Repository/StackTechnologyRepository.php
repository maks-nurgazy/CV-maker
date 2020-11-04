<?php

namespace App\Repository;

use App\Entity\StackTechnology;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StackTechnology|null find($id, $lockMode = null, $lockVersion = null)
 * @method StackTechnology|null findOneBy(array $criteria, array $orderBy = null)
 * @method StackTechnology[]    findAll()
 * @method StackTechnology[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StackTechnologyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StackTechnology::class);
    }

    // /**
    //  * @return StackTechnology[] Returns an array of StackTechnology objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StackTechnology
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
