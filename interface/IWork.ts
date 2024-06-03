import { type Models } from "appwrite";
import type { customTypeEnums } from "@vue/devtools-kit";
import * as url from "url";

export interface IWork extends Models.Document {
  title: string;
  year: string | null;
  tag: customTypeEnums;
  is_tag_dark: boolean | null;
  work_preview: string;
  id: string;
}
