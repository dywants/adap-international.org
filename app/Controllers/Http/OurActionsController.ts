// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OurActionsController {
  public async index({ view }) {
    return view.render('our-actions')
  }
}
