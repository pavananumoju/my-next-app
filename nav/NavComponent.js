import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "../nav/AcmeLogo.js";

const collapseItems = [
    "Features",
    "Customers",
    "Company",
    "Legal",
    "Teams",
    "Help & Feedback"
  ];

export function NavComponent (){
    return(
    <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <AcmeLogo />
          <Text b color="inherit">
            CricBudz
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Fixtures</Navbar.Link>
          <Navbar.Link isActive href="#">
            Rules
          </Navbar.Link>
          <Navbar.Link href="#">Results</Navbar.Link>
          <Navbar.Link href="#">Schedule</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    )
}