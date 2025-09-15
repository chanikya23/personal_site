import { Footer } from '../Footer';
import { ThemeProvider } from '../ThemeProvider';

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 p-8">
          <p>Content above footer</p>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}