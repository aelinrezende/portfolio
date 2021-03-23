import React, { memo, HTMLAttributes, Ref } from 'react';
import { Container, Content, Reflection } from '../styles/components/Card';

export interface CardProps {
  className?: string;
  ref?: Ref<HTMLDivElement>;

  cardColor?: string;
  reflectColor?: string;
  borderRadius?: string;
  margin?: number;

  reflection?: number;
  distanceRate?: number;
  applyBorderRadiusAll?: boolean;
  darkenRate?: number;
}

const Card: React.FC<CardProps & HTMLAttributes<HTMLDivElement>> = memo(
  ({
    className,
    cardColor,
    reflectColor,
    borderRadius,
    margin,
    reflection,
    distanceRate,
    applyBorderRadiusAll,
    darkenRate,
    children,
    ...rest
  }) => {
    const reflections = Array(reflection).fill(0);
    const [styles, features] = [
      { cardColor, reflectColor, borderRadius, margin },
      { reflection, distanceRate, applyBorderRadiusAll, darkenRate },
    ];

    return (
      <Container
        className={className}
        styles={styles}
        features={features}
        reflections={reflections}
        {...rest}
      >
        {reflections.map((_, i) => (
          <Reflection className="reflection" key={'reflection-' + i++} />
        ))}
        <Content styles={styles} features={features}>
          {children}
        </Content>
      </Container>
    );
  },
);

Card.defaultProps = {
  className: '',

  cardColor: '#1a191d',
  reflectColor: '',
  borderRadius: '0',
  margin: 1,

  reflection: 1,
  distanceRate: 1,
  applyBorderRadiusAll: true,
  darkenRate: 0.1,
};

export default Card;
