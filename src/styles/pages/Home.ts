import styled, { css } from 'styled-components';
import { darken } from 'polished';

import Card from '../../components/Card';

interface InputProps {
  inputFocused: boolean;
}

export const Container = styled.main`
  height: 100%;
  padding: 0 2rem 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden auto;

  h1 {
    font-size: 5rem;
    color: ${props => props.theme.colors.text.primary};
    position: relative;

    &::after {
      content: '';
      height: 3rem;
      width: 100%;
      top: 50%;
      display: block;
      position: absolute;
      background: #29756e;
      z-index: -9;
    }
  }

  > p {
    font-size: 1.6rem;
    text-decoration: underline;
    font-style: italic;
  }
`;

export const InputContainer = styled.div<InputProps>`
  background: #131215;
  box-shadow: 0 5px 20px -5px rgb(0 0 0 / 50%);
  border: 3px solid transparent;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 20px;

  display: flex;
  align-items: center;

  transition: border 0.2s;

  ${props =>
    props.inputFocused &&
    css`
      border: 3px solid #893d8c;
    `}

  &:focus {
    box-shadow: 0 5px 0 #000;
  }

  input {
    height: 100%;
    background: transparent;
    border: 0;
    color: #fff;

    display: flex;
    flex: 1;

    &:focus {
      outline: 0;
    }
  }

  svg {
    stroke: #d9c0de;
    width: 3rem;
    height: auto;
    margin-right: 1rem;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 4rem repeat(3, minmax(0, 10rem));
  width: 100%;
  grid-gap: 0.8rem;

  button {
    height: 4rem;
    background: transparent;
    padding: 0.2rem;
    border: 2px solid #928bad;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 800;
    color: #dedede;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  button#filter,
  button.active {
    color: #100f13;
    background: #928bad;
    box-shadow: 0 7px 15px -2px rgb(0 0 0 / 70%);
  }

  button#filter {
    position: relative;
    border-radius: 50%;
    width: 100%;
    transition-property: background border-color;
    transition-duration: 0.5s;

    &:hover {
      border-color: ${darken(0.05, '#928bad')};
      background: ${darken(0.05, '#928bad')};
      transition: all 0.5s;
    }

    svg {
      transform: rotate(90deg);
      width: auto;
      height: 2.3rem;
    }
  }
`;

export const FilterContainer = styled.form`
  box-shadow: 0 15px 15px -5px rgb(0 0 0 / 67%);
  position: absolute;
  padding: 2rem;
  top: calc(100% + 2rem);
  width: 100%;
  min-height: 15rem;
  z-index: 1;
  border-radius: 10px;
  background: #171212;

  &:before {
    content: '';
    bottom: 100%;
    width: 0;
    left: 1rem;
    position: absolute;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1.2rem solid #171212;
  }
`;

export const FormGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }

  h2 {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }

  > h2:after {
    content: '';
    background: #2d2929;
    height: 1px;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

export const SelectGroup = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-column-gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    input[type='radio'] {
      visibility: hidden;
      width: 0;
    }

    input[type='radio'] + label {
      width: 100%;
      padding: 1.2rem;
      background: transparent;
      border: 2px solid #3b3a42;
      border-radius: 5px;
      font-size: 1.4rem;
      font-weight: 600;
      text-align: center;
      cursor: pointer;
      transition-property: border background;
      transition-duration: 0.5s;

      &:hover {
        background: ${darken(0.05, '#928bad')};
        border-color: ${darken(0.05, '#928bad')};
      }
    }

    input[type='radio']:checked + label {
      transition: all 0.5s;
      color: #100f13;
      font-weight: 800;
      background: #928bad;
      box-shadow: 0 7px 15px -2px rgb(0 0 0 / 70%);
      border-color: #928bad;
    }
  }
`;

export const CustomCard = styled(Card)`
  width: 30rem;
  box-shadow: 0 21px 15px -14px #000;

  > div {
    width: 100%;
  }
`;

export const CardCover = styled.div`
  background-image: url('https://marcorezendebackup.github.io/portfolio/imgs/matching-game-cover-medium.png');
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 25rem;
`;

export const CardDetails = styled.div`
  text-align: center;
  padding: 1rem;
  height: 10rem;
`;
