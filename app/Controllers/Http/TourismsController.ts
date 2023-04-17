// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TourismsController {
  public async index({ view }) {
    return view.render('tourism')
  }
}
