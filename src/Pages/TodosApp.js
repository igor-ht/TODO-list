import { Header } from '../components/Header';
import { MainSection } from '../components/MainSection';
import { SetListItems } from '../components/ListItem';
import { Footer } from '../components/Footer';

export default function TodosApp() {

  return (
    <>
      <section className='todoapp fs-5'>
        <Header/>
        <MainSection>
          <SetListItems/>
        </MainSection>
        <Footer />
      </section>
    </>
  )
}