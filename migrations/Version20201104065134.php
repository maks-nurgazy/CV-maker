<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201104065134 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE resume_stack_technology DROP FOREIGN KEY FK_89A18650878E0611');
        $this->addSql('ALTER TABLE resume_stack_technology DROP FOREIGN KEY FK_89A18650D262AF09');
        $this->addSql('ALTER TABLE resume_stack_technology ADD CONSTRAINT FK_89A18650878E0611 FOREIGN KEY (stack_technology_id) REFERENCES stack_technology (id)');
        $this->addSql('ALTER TABLE resume_stack_technology ADD CONSTRAINT FK_89A18650D262AF09 FOREIGN KEY (resume_id) REFERENCES resume (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE resume_stack_technology DROP FOREIGN KEY FK_89A18650D262AF09');
        $this->addSql('ALTER TABLE resume_stack_technology DROP FOREIGN KEY FK_89A18650878E0611');
        $this->addSql('ALTER TABLE resume_stack_technology ADD CONSTRAINT FK_89A18650D262AF09 FOREIGN KEY (resume_id) REFERENCES resume (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE resume_stack_technology ADD CONSTRAINT FK_89A18650878E0611 FOREIGN KEY (stack_technology_id) REFERENCES stack_technology (id) ON UPDATE NO ACTION ON DELETE CASCADE');
    }
}
