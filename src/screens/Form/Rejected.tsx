import React, {useCallback} from 'react';
import {setFormState} from 'core';
import {FormBodyProps} from 'screens/types';
import {Text, View, Rejected as RejectedIcon, useTheme, Button} from 'ui';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utils/dimensions';

export const Rejected = ({
  actions: {toStart = () => null, toEnd},
}: FormBodyProps) => {
  const {colors, spacing} = useTheme();
  const startOver = useCallback(() => {
    setFormState('not_submitted');
    setTimeout(toStart, 0);
  }, []);

  return (
    <View
      p="l"
      height={SCREEN_HEIGHT / 1.8}
      justifyContent="flex-end"
      alignItems="center">
      <Text variant="header">Ooooopsy</Text>
      <View my="ms">
        <RejectedIcon width={65} height={65} color={colors.warning} />
      </View>
      <Text textAlign="center" color="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut lectus
        massa. Aliquam ut mi eget tellus aliquam viverra quis a augue. Nulla
        augue tortor, fringilla non auctor in, egestas ac neque. Praesent a arcu
        ex. Nunc lacinia ipsum ut lectus aliquet tincidunt. Curabitur tincidunt
        felis nec hendrerit elementum. Mauris maximus sem nec leo aliquam, at
        pharetra tellus dapibus. Vestibulum ut suscipit nulla, eget efficitur
        turpis. Nunc placerat gravida tempus. ed ex elit, ultrices ac elementum
        in, sollicitudin sit amet magna.
      </Text>
      <Button
        width={SCREEN_WIDTH - 2 * spacing.l}
        variant="white_transp"
        label="Start over"
        onPress={startOver}
        marginTop="l"
      />
    </View>
  );
};
