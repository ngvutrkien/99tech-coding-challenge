CREATE TABLE IF NOT EXISTS resources (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    archived BOOLEAN DEFAULT FALSE
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_resources_name ON resources(name);
CREATE INDEX IF NOT EXISTS idx_resources_created_at ON resources(created_at);
CREATE INDEX IF NOT EXISTS idx_resources_updated_at ON resources(updated_at);
CREATE INDEX IF NOT EXISTS idx_resources_archived ON resources(archived);

-- Insert example records
INSERT INTO resources (name, description) VALUES
    ('Item 1', 'Handles user login, registration, and authentication'),
    ('Item 2', 'Manages database connections and pooling'),
    ('Item 3', 'Sends transactional and marketing emails'),
    ('Item 4', 'Manages file uploads and storage'),
    ('Item 5', 'Processes payments and handles transactions'),
    ('Item 6', 'Centralized logging and monitoring'),
    ('Item 7', 'Redis-based caching layer'),
    ('Item 8', 'Routes and manages API requests'),
    ('Item 9', 'Asynchronous message processing'),
    ('Item 10', 'Tracks and reports user analytics'),
    ('Item 11', 'Manages user sessions and tokens'),
    ('Item 12', 'Handles real-time notifications'),
    ('Item 13', 'Implements rate limiting and throttling'),
    ('Item 14', 'Manages search indexing and queries'),
    ('Item 15', 'Handles data validation and sanitization'),
    ('Item 16', 'Manages scheduled tasks and cron jobs'),
    ('Item 17', 'Implements API versioning'),
    ('Item 18', 'Handles error tracking and reporting'),
    ('Item 19', 'Manages third-party integrations'),
    ('Item 20', 'Implements data encryption and security'),
    ('Item 21', 'Coordinates distributed transaction management'),
    ('Item 22', 'Generates PDF reports and documents'),
    ('Item 23', 'Manages WebSocket connections'),
    ('Item 24', 'Handles image processing and optimization'),
    ('Item 25', 'Implements OAuth2 provider functionality'),
    ('Item 26', 'Manages multi-tenant data isolation'),
    ('Item 27', 'Orchestrates microservices communication'),
    ('Item 28', 'Handles CSV import and export operations'),
    ('Item 29', 'Implements full-text search with Elasticsearch'),
    ('Item 30', 'Manages API documentation generation');
    