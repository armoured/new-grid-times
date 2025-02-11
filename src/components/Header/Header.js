import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS, WEIGHTS, FAMILIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopRow>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopRow>
        <Logo />
        <HeaderRight>
          <SubscribeButton>subscribe</SubscribeButton>
          <SubscribeLink>Already a subscriber?</SubscribeLink>
        </HeaderRight>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;   
`;

const DesktopRow = styled(MaxWidthWrapper)`
  display: none;


  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: space-between; 
    width: 100%;
    grid-area: left-side;    
    justify-self: start;
    padding: 0;
  }
  
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const HeaderRight = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    grid-area: right-side;
    justify-self: end;
  }
`;


const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 81px;

    display: grid;
    align-items: revert;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    'left-side logo right-side';
    align-items: baseline;
  }
`;

const SubscribeButton = styled.button`
  padding: ${11/16}rem ${24/16}rem;
  background: ${COLORS.primary};
  color: ${COLORS.white};
  border-radius: 4px;

  font-family: ${FAMILIES.sansSerif};
  font-size: 1rem;
  line-height: ${18/16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-align: center;
`;

const SubscribeLink = styled.a`
  text-decoration: underline;
  cursor: pointer;

  font-family: ${FAMILIES.serif};
  font-style: italic;
  font-weight: ${WEIGHTS.normal};
  font-size: ${14/16}rem;
  line-height: ${22/16}rem;

  color: ${COLORS.gray[900]};
`;


export default Header;
