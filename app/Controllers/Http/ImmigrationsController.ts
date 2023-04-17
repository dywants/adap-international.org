// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ImmigrationsController {
  public async index({ view }) {
    return view.render('immigration')
  }
}
