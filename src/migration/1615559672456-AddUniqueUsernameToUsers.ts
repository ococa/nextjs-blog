import {MigrationInterface, QueryRunner, TableIndex} from "typeorm";

export class AddUniqueUsernameToUsers1615559672456 implements MigrationInterface {

    /**
     * 数据校验 数据库级别兜底校验。
     * @param queryRunner
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex('users',
            new TableIndex({
                name: 'users_username',
                columnNames: ['username'],
                isUnique: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('users', 'users_username')
    }

}
