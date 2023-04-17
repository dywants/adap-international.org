// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AboutsController {
  public async index({ view }) {
    return view.render('about')
  }
}
