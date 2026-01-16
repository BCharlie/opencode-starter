# OpenCode Workspace Context

## Environment

This is an Eclipse Che workspace running in a Kubernetes cluster.

### Services

- **MongoDB**: Available at `mongodb://localhost:27017/dev`
  - Runs as a container sidecar in the same pod
  - No authentication required
  - Database name: `dev`

- **Application Port**: 3000 (or 8080)
  - Express.js server

### Workspace URLs

When you need to expose an endpoint, it will be available at:
```
https://{port}-{workspace-name}.che.house.retro-bits.uk
```

For example, if the workspace is named `opencode-mongo-xyz123` and you run on port 3000:
```
https://3000-opencode-mongo-xyz123.che.house.retro-bits.uk
```

### Environment Variables

- `MONGODB_URI`: Connection string for MongoDB (mongodb://localhost:27017/dev)
- `OLLAMA_HOST`: URL to Ollama API (http://192.168.50.170:11434)
- `PORT`: Default application port (3000)

## Project Structure

- `index.js` - Express.js server with MongoDB connection
- `package.json` - Node.js dependencies (express, mongodb)
- `opencode.json` - OpenCode configuration for Ollama

## Development Notes

- Use `npm install` to install dependencies
- Use `npm start` to run the application
- MongoDB is already running - no need to start it separately
- The workspace has Node.js and common dev tools pre-installed (UDI image)
