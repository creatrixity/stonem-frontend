import * as React from 'react';
import {
    Flex,
    Text,
} from 'rebass';
import {
    CapsText,
    Dot,
} from '../UI';
import { theme } from '../../config';

type activationRequirementHeadingProps = {
  title: string;
  stepNumber: string;
};
/**
 * Creates a heading containing a title and step number.
 *
 * @param {title}  title      - Heading title.
 * @param {string} stepNumber - Current step that this heading corresponds to.
 *
 * @returns React.Reactnode
 */
const activationRequirementHeading:React.SFC<activationRequirementHeadingProps> = ({
    stepNumber,
    title,
}: activationRequirementHeadingProps) => {
  return (
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          mb={3}
        >
          <Dot
            size={'30px'}
            style={{
              background: theme.colors.lightgray,
              position: 'relative',
            }}
          >
            <Text
              color={'blue'}
              fontSize={1}
              fontWeight={'500'}
              mb={2}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
              }}
            >
              {stepNumber}
            </Text>
          </Dot>
          <CapsText
            color={'blue'}
            fontSize={2}
            fontWeight={'500'}
          >
            {title}
          </CapsText>
        </Flex>
  );
};

export default activationRequirementHeading;
