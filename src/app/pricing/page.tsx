import { redirect } from 'next/navigation';

export default function PricingRedirect() {
  // Redirect to /pricing/default-slug (or another default slug of your choice)
redirect('/pricing/women');
}