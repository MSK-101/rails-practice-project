import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hi, I am connected!!")
  }
}
