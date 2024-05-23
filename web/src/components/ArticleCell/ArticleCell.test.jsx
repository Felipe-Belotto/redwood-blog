// web/src/components/ArticleCell/ArticleCell.test.jsx

import { render, screen } from '@redwoodjs/testing/web'; // Ensure correct import
import { Success } from './ArticleCell';

// ... (rest of your imports)

test('Success renders successfully', async () => {
  const ARTICLE = {
    id: 1,
    title: 'First Post',
    body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  };

  render(<Success article={ARTICLE} />); // Pass a single article object

  expect(screen.getByText(ARTICLE.title)).toBeInTheDocument();
  expect(screen.getByText(ARTICLE.body)).toBeInTheDocument();
});
