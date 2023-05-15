import { Button } from "@/theme/components/button";
import { Card } from "@/theme/components/card";
import { Heading } from "@/theme/components/heading";
import { Link } from "@/theme/components/link";
import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";
import { styles } from "@/theme/styles";
import { extendTheme } from "@chakra-ui/react";

const components = { Button, Card, Heading, Link };

export const theme = extendTheme({ styles, colors, fonts, components });
