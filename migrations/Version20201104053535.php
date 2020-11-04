<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201104053535 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE resume_stack_technology (resume_id INT NOT NULL, stack_technology_id INT NOT NULL, INDEX IDX_89A18650D262AF09 (resume_id), INDEX IDX_89A18650878E0611 (stack_technology_id), PRIMARY KEY(resume_id, stack_technology_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stack_technology (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE resume_stack_technology ADD CONSTRAINT FK_89A18650D262AF09 FOREIGN KEY (resume_id) REFERENCES resume (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE resume_stack_technology ADD CONSTRAINT FK_89A18650878E0611 FOREIGN KEY (stack_technology_id) REFERENCES stack_technology (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE resume DROP stack_technologies, CHANGE image image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE resume_stack_technology DROP FOREIGN KEY FK_89A18650878E0611');
        $this->addSql('DROP TABLE resume_stack_technology');
        $this->addSql('DROP TABLE stack_technology');
        $this->addSql('ALTER TABLE resume ADD stack_technologies LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE image image LONGBLOB DEFAULT NULL');
    }
}
