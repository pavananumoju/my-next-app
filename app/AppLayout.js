import { Box } from "../nav/Box.js";
import { NavComponent } from "@/nav/NavComponent.js";

export const AppLayout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    <NavComponent/>
    {children}
    
  </Box>
);
