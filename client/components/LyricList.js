import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { optimistic } from "apollo-client/optimistic-data/store";

class LyricList extends Component {
  onLyricLike(id, likes) {
    // console.log(id);
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <div>
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i
                className="like material-icons"
                onClick={() => this.onLyricLike(id, likes)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        </div>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;
export default graphql(mutation)(LyricList);
