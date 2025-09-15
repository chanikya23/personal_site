import { Header } from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 p-8">
          <p>Scroll to see header background blur effect</p>
        </div>
      </div>
    </ThemeProvider>
  );
}