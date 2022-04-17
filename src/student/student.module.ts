import { Module } from "@nestjs/common";
import { StudentService } from "./student.service";

@Module({
    imports: [],
    controllers: [],
    providers: [StudentService],
  })
  export class StudentModule {}
  