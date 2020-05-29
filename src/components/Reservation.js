import React, { Component } from "react";

export default class Reservation extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="reservation">
        <form className="form bg-white p-6 my-10 relative">
          <h3 className="cabecera">Events</h3>
          <div className="flex space-x-5 mt-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2  w-1/2"
            />
            <input
              type="tel"
              name=""
              id=""
              placeholder="Your Number"
              className="border p-2 w-1/2"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full mt-3"
          />
          <textarea
            cols="10"
            rows="3"
            placeholder="Descripcion"
            className="border p-2 mt-3 w-full"
          ></textarea>
          <input
            type="submit"
            value="Send"
            onClick={this.handleSubmit}
            className="btn w-full mt-6 bg-black text-white font-semibold p-3"
          />
        </form>
      </div>
    );
  }
}
