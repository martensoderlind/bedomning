import { db } from "@/db";
import { createService } from "./service";

export const studentsService = createService(db);
