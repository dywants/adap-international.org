// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BlogsController {
  public async index({ view }) {
    return view.render('blog')
  }
}
