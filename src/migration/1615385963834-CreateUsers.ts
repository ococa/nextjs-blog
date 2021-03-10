import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1615385963834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                { name: 'id', isGenerated: true, type: 'int', generationStrategy: 'increment', isPrimary: true },
                { name: 'username', type: 'varchar' },
                { name: 'password', type: 'varchar' },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
