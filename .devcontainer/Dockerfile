FROM node:24

# Set working directory inside container
WORKDIR /workspace

# Install common tools (optional)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Use non-root user (optional, safer)
# RUN useradd -m devuser && chown -R devuser /workspace
# USER devuser
