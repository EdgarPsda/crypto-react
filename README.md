# Crypto-React

Crypto-React is a simple application that allows users to check the exchange rates of various cryptocurrencies. The main focus of this project is the consumption of a cryptocurrency exchange rate API, combined with DevSecOps practices to ensure secure, efficient, and automated deployment.

## Features

- **Cryptocurrency Exchange Rates**: Fetch and display the latest exchange rates for various cryptocurrencies.
- **Custom Hooks**: Utilizes custom React hooks for efficient state management and API calls.
- **Styled Components**: Implements styled components for modular and maintainable styling.
- **Asynchronous Requests**: Handles asynchronous API requests to retrieve real-time data.
- **CI/CD Pipeline**: Automated build, test, and deployment using **GitHub Actions**.
- **DevSecOps Integration**: Implemented security checks using **Trivy** to scan Docker images for vulnerabilities.
- **Multi-stage Docker Build**: Optimized Docker build process for smaller and more secure production images.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool for fast development.
- **Custom Hooks**: Used for handling state and side effects.
- **Styled Components**: For writing component-level styles in JavaScript.
- **Asynchronous Requests**: Fetch API or Axios for making HTTP requests.
- **GitHub Actions**: Used to automate the CI/CD pipeline for the project.
- **Trivy**: A vulnerability scanner for container images.
- **Docker**: Used for containerizing the application with a multi-stage build process.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/EdgarPsda/crypto-react
   ```

2. Navigate to the project directory:

   ```bash
   cd crypto-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:5173`.

## Docker Usage

You can also use the pre-built Docker image for easy deployment. To run the application using Docker, execute the following command:

```bash
docker run -it --rm -p 80:80 --memory="128m" --cpus="0.5" edgarpsda/crypto-react:[tag]
```

This will expose the application on port 80.

## DevSecOps Integration

This project integrates DevSecOps principles to ensure the security of the containerized application:

- **Vulnerability Scanning**: The Docker images are scanned for vulnerabilities using **Trivy** as part of the CI/CD pipeline in GitHub Actions.
- **Automation**: All security checks and image builds are automated within the GitHub Actions pipeline to ensure consistency and reduce manual intervention.

To execute a security scan locally using Trivy, you can run:

```bash
docker run --rm -v $(pwd):/root/.cache/ aquasec/trivy:0.17.2 -q image --exit-code 1 --severity CRITICAL --light edgarpsda/crypto-react:[tag]
```

## Usage

After launching the application, users can:

- View a list of available cryptocurrencies.
- Check the exchange rates of selected cryptocurrencies in real-time.

## Continuous Integration and Deployment

The project is equipped with a CI/CD pipeline that automates:

1. **Linting and Unit Testing**: Ensuring code quality and correctness.
2. **Docker Build**: Using a multi-stage build process for a secure and optimized container image.
3. **Security Scanning**: Automatically scanning Docker images for vulnerabilities using Trivy.
4. **Deployment**: Automating the deployment process (coming soon with Kubernetes).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
