import {MigrationInterface, QueryRunner} from "typeorm";

export class init1650184371641 implements MigrationInterface {
    name = 'init1650184371641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Roles" ("Id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_04f7be88261f9d1e55675c0ee75" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "people" ("Id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255) NOT NULL, "LastName" nvarchar(255) NOT NULL, "NationalCode" nvarchar(255) NOT NULL, "roleId" int, CONSTRAINT "UQ_9cdcf39a1a53687f83911c44fd6" UNIQUE ("NationalCode"), CONSTRAINT "PK_6ec1b6a9a2d225fd6bcfc35f922" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "people" ADD CONSTRAINT "FK_5daefbb2702a27390ff93d821d8" FOREIGN KEY ("roleId") REFERENCES "Roles"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "people" DROP CONSTRAINT "FK_5daefbb2702a27390ff93d821d8"`);
        await queryRunner.query(`DROP TABLE "people"`);
        await queryRunner.query(`DROP TABLE "Roles"`);
    }

}
