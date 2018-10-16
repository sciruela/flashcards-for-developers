import React, { Component } from "react";

import Octicon from "../../components/Octicon";

class DecksNew extends Component {
  state = { name: "", description: "", source: "" };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, description, source } = this.state;

    return (
      <div>
        <div className="container container--narrow py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="mb-4">
                <h1 className="m-0">Create a new deck</h1>

                <p className="deck-description p-0">
                  A deck is a collection of related flashcards, typically covers a single topic.
                </p>
                <hr />
              </div>
              <form onSubmit={this.onSubmit}>
                <div class="form-group mb-4">
                  <label className="small font-weight-bold mb-1">Enter a deck name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={`e.g. "JavaScript Common Methods"`}
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="small font-weight-bold mb-1">
                    Enter a deck description <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder={`e.g. "A collection of commonly used JavaScripts functions."`}
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 mt-4">
                  <div>
                    <Octicon name="lock" width={24} height={30} fill="#b9ad87" className="d-flex" />
                  </div>
                  <div className="d-flex flex-column justify-content-center ml-2">
                    <span className="font-weight-medium" style={{ lineHeight: "1em" }}>
                      Private deck
                    </span>
                    <small className="text-muted">
                      You are the only one who can see and study to this deck.
                    </small>
                  </div>
                </div>
                <button className="btn btn-dark btn-sm font-weight-medium py-2 w-100" type="submit">
                  Create Deck
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DecksNew;