import { Button, Card, Input } from '@cc-ecommerce/ui-library';
import { tokens } from '@cc-ecommerce/design-tokens';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Component Library</h1>
          <p>CC Ecommerce Design System</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* Colors Section */}
          <section className="section">
            <h2>Design Tokens</h2>
            <div className="color-grid">
              <div className="color-box">
                <div className="swatch" style={{ backgroundColor: tokens.colors.accent.primary }}></div>
                <p>Primary</p>
              </div>
              <div className="color-box">
                <div className="swatch" style={{ backgroundColor: tokens.colors.accent.secondary }}></div>
                <p>Secondary</p>
              </div>
              <div className="color-box">
                <div className="swatch" style={{ backgroundColor: tokens.colors.accent.success }}></div>
                <p>Success</p>
              </div>
              <div className="color-box">
                <div className="swatch" style={{ backgroundColor: tokens.colors.accent.error }}></div>
                <p>Error</p>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section className="section">
            <h2>Buttons</h2>
            <div className="component-grid">
              <Card padding="md" border>
                <h3>Primary Button</h3>
                <div className="demo">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </Card>

              <Card padding="md" border>
                <h3>Secondary Button</h3>
                <div className="demo">
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
              </Card>

              <Card padding="md" border>
                <h3>Ghost Button</h3>
                <div className="demo">
                  <Button variant="ghost" size="sm">Small</Button>
                  <Button variant="ghost" size="md">Medium</Button>
                  <Button variant="ghost" size="lg">Large</Button>
                </div>
              </Card>

              <Card padding="md" border>
                <h3>Danger Button</h3>
                <div className="demo">
                  <Button variant="danger" size="sm">Delete</Button>
                  <Button variant="danger" size="md">Delete</Button>
                  <Button variant="danger" size="lg">Delete</Button>
                </div>
              </Card>

              <Card padding="md" border>
                <h3>Loading State</h3>
                <div className="demo">
                  <Button variant="primary" loading>Loading...</Button>
                </div>
              </Card>

              <Card padding="md" border>
                <h3>Disabled State</h3>
                <div className="demo">
                  <Button variant="primary" disabled>Disabled</Button>
                </div>
              </Card>

              <Card padding="md" border>
                <h3>Full Width</h3>
                <div className="demo" style={{ width: '100%' }}>
                  <Button variant="primary" fullWidth>Full Width Button</Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Cards Section */}
          <section className="section">
            <h2>Cards</h2>
            <div className="component-grid">
              <Card padding="sm" border>
                <h3>Small Padding</h3>
                <p>Card with small padding</p>
              </Card>

              <Card padding="md" border hoverable>
                <h3>Medium Padding (Hoverable)</h3>
                <p>This card has a hover effect</p>
              </Card>

              <Card padding="lg" border>
                <h3>Large Padding</h3>
                <p>Card with large padding for more content</p>
              </Card>
            </div>
          </section>

          {/* Input Section */}
          <section className="section">
            <h2>Form Inputs</h2>
            <Card padding="md" border>
              <div className="form-demo">
                <Input label="Basic Input" placeholder="Enter text..." />
                <Input label="With Helper" helper="This is a helper text" placeholder="Enter text..." />
                <Input label="With Error" error="This field is required" placeholder="Enter text..." />
                <Input label="Email Input" type="email" placeholder="name@example.com" />
              </div>
            </Card>
          </section>

          {/* Typography Section */}
          <section className="section">
            <h2>Typography</h2>
            <Card padding="md" border>
              <h3 style={tokens.typography.h2}>Heading 2 (32px, Bold)</h3>
              <h4 style={tokens.typography.h3}>Heading 3 (28px, Bold)</h4>
              <p style={tokens.typography.bodyBase}>Body text (16px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p style={tokens.typography.bodySm}>Small body text (14px) - This is smaller body text for secondary information.</p>
              <p style={tokens.typography.labelBase}>Label text (14px) - For form labels and captions.</p>
            </Card>
          </section>

          {/* Spacing Section */}
          <section className="section">
            <h2>Spacing Scale</h2>
            <Card padding="md" border>
              <div className="spacing-demo">
                <div className="spacing-row">
                  <span>4px:</span>
                  <div className="spacing-box" style={{ width: '4px', height: '24px', backgroundColor: tokens.colors.accent.primary }}></div>
                </div>
                <div className="spacing-row">
                  <span>8px:</span>
                  <div className="spacing-box" style={{ width: '8px', height: '24px', backgroundColor: tokens.colors.accent.primary }}></div>
                </div>
                <div className="spacing-row">
                  <span>16px:</span>
                  <div className="spacing-box" style={{ width: '16px', height: '24px', backgroundColor: tokens.colors.accent.primary }}></div>
                </div>
                <div className="spacing-row">
                  <span>24px:</span>
                  <div className="spacing-box" style={{ width: '24px', height: '24px', backgroundColor: tokens.colors.accent.primary }}></div>
                </div>
                <div className="spacing-row">
                  <span>32px:</span>
                  <div className="spacing-box" style={{ width: '32px', height: '24px', backgroundColor: tokens.colors.accent.primary }}></div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 CC Ecommerce. Component Library v1.0.0</p>
      </footer>
    </div>
  );
}
