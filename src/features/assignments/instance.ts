import { db } from "@/db";
import { createService } from "./service";

export const assignmentService = createService(db);
