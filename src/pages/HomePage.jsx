import Header from '../components/Header.jsx';
import RecommendedQuestions from '../components/RecommendedQuestions.jsx';
import RecentConsultation from '../components/RecentConsultation';
import ExpertRecommendation from '../components/ExpertRecommendation';
import BottomNav from '../components/BottomNav';

function HomePage() {
  return (
    <div className="container">
      <Header />
      <main className="content" style={{ paddingBottom: '56px' }}>
        <RecommendedQuestions />
        <RecentConsultation />
        <ExpertRecommendation />
      </main>
      <BottomNav />
    </div>
  );
}

export default HomePage;