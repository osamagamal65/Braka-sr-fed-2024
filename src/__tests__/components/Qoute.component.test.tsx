// !STARTERCONF You should delete this page
import { render, screen } from "@testing-library/react";

import Quote from "@/components/Quote/Quote";
import { NextIntlClientProvider } from "next-intl";

describe("Homepage", async () => {
  let messages = (await import(`../../../messages/en.json`)).default;
  it("renders the Quote component", () => {
    render(
      <NextIntlClientProvider messages={messages}>
        <Quote />
      </NextIntlClientProvider>
    );
    const heading = screen.getByText(/warren buffet/i);
    expect(heading).toBeInTheDocument();
  });
});
