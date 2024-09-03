import { PropsWithChildren } from 'react';

/**
 * To use for children typing: React.ReactNode; OR
 * PropsWithChildren
 **/

// type BoxProps = { children: React.ReactNode };
type BoxProps = PropsWithChildren<{}>;

const Box = ({ children }: BoxProps) => {
  return (
    <section
      className="m-4"
      style={{ padding: '1em', border: '5px solid purple' }}
    >
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <main className="m-8">
      <Box>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Application;
