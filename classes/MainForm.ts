import type IMainForm from "../interface/IMainForm";

export default class MainForm {
  name?: string = "";
  email?: string = "";
  interested?: string[] = [];
  budget?: string = "";
  more_info?: string = "";
  constructor(request?: IMainForm) {
    if (request) {
      this.name = request.name;
      this.email = request.email;
      this.interested = request.interested;
      this.budget = request.budget;
      this.more_info = request.more_info;
    }
  }
  resetFields() {
    this.name = "";
    this.email = "";
    this.interested = [];
    this.budget = "";
    this.more_info = "";
  }
}
