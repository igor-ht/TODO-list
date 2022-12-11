import * as React from 'react';
import useTodos from './useTodos';
import { Header } from './Header';
import { MainSection } from './MainSection';
import { SetListItems } from './ListItem';
import { Footer } from './Footer';
import ListContext from '../ListContext';

export default function TodosApp() {

  const todoApi = useTodos();

  return (
    <>
      <ListContext.Provider value={todoApi}>
        <section className='todoapp'>
          <Header/>
          <MainSection>
            <SetListItems/>
          </MainSection>
          <Footer />
        </section>
      </ListContext.Provider>
    </>
  )
}