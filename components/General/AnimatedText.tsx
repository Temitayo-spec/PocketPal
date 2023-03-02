import React from 'react';
import { motion, MotionValue } from 'framer-motion';

// Word wrapper
const Wrapper = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = (props: { text: string; type: string | number }) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ');

  // Create storage array
  const words = [] as any;

  // Push each word into words array
  for (const [, item] of splitWords.entries() as any) {
    words.push(item.split(''));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word: string[]) => {
    return word.push('\u00A0');
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type as any] as any;

  return (
    <Tag>
      {words.map((word: any, index: string | number) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index]
              .flat()
              .map(
                (
                  element:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | MotionValue<number>
                    | MotionValue<string>
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => {
                  return (
                    <span
                      style={{
                        overflow: 'hidden',
                        display: 'inline-block',
                      }}
                      key={index}
                    >
                      <motion.span
                        style={{ display: 'inline-block' }}
                        variants={item}
                        dangerouslySetInnerHTML={{ __html: element as any }}
                      />
                    </span>
                  );
                }
              )}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedText;
