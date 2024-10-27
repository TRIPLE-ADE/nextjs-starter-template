import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "Welcome to Your Next.js Starter Template",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the Next.js logo", () => {
    render(<Home />);

    const logo = screen.getByAltText("Next.js logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    render(<Home />);
    const description = screen.getByText(
      /Kickstart your Next.js project with this pre-configured template, ready to go!/i,
    );

    expect(description).toBeInTheDocument();
  });

  it("renders the GitHub link", () => {
    render(<Home />);
    const githubLink = screen.getByRole("link", { name: /View on GitHub/i });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/TRIPLE-ADE/nextjs-starter-template",
    );
  });

  it("renders the Download Starter link", () => {
    render(<Home />);
    const downloadLink = screen.getByRole("link", { name: /Download Starter/i });

    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute(
      "href",
      "https://github.com/TRIPLE-ADE/nextjs-starter-template/archive/refs/heads/main.zip",
    );
  });
});
