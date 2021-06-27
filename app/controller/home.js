"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hello, world!";
  }

  async detail() {
    const { ctx } = this;
    ctx.body = {
      data: {
        result: "TRUE",
        message: "success",
      },
    };
  }
}

module.exports = HomeController;
