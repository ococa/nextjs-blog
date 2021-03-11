import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCreateAtAndUpdatedAt1615422934871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('users', [
            new TableColumn({ name: 'createAt', type: 'time', default: 'now()' }),
            new TableColumn({ name: 'updateAt', type: 'time', default: 'now()' })
        ])
        await queryRunner.addColumns('posts', [
            new TableColumn({ name: 'createAt', type: 'time', default: 'now()' }),
            new TableColumn({ name: 'updateAt', type: 'time', default: 'now()' })
        ])
        await queryRunner.addColumns('comments', [
            new TableColumn({ name: 'createAt', type: 'time', default: 'now()' }),
            new TableColumn({ name: 'updateAt', type: 'time', default: 'now()' })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropColumn('users', 'createAt');
            await queryRunner.dropColumn('users', 'updateAt');
            await queryRunner.dropColumn('posts', 'createAt');
            await queryRunner.dropColumn('posts', 'updateAt');
            await queryRunner.dropColumn('comments', 'createAt');
            await queryRunner.dropColumn('comments', 'updateAt');
        } catch (e) {
            console.error('=====here error=====')
            console.error(e);
        }

    }
}
