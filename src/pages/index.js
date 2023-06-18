import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const title = data.landing.title || "Placeholder Title";

  return (
    <div>
      <h1>{title}</h1>
      {/* Rest of your code */}
    </div>
  );
};

export const query = graphql`
  query {
    landing {
      title
    }
  }
`;

export default IndexPage;
