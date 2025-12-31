import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "dharmikmani123@gmail.com",
		href: "mailto:dharmikmani123@gmail.com",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+91 8919473348",
		href: "tel:+918919473348",
	},
	{
		icon: MapPin,
		label: "Location",
		value: "India",
		href: null,
	},
];

const socialLinks = [
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/dharmikmani123",
		username: "dharmikmani123",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/kothamasu-dharmik-sri-venkata-sai-mani-53150528a/",
		username: "kothamasu-dharmik-sri-venkata-sai-mani",
	},
	{
		icon: Globe,
		label: "Dharmik Portfolio",
		href: "#",
		username: "Dharmik Portfolio",
	},
];

export function ContactSection() {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [captchaToken, setCaptchaToken] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		const formDataToSend = new FormData();
		formDataToSend.append("name", formData.name);
		formDataToSend.append("email", formData.email);
		formDataToSend.append("subject", formData.subject);
		formDataToSend.append("message", formData.message);

		try {
			const response = await fetch("https://formspree.io/f/xwvpeelo", {
				method: "POST",
				headers: {
					Accept: "applicati          npm run build          npm run build          npm run build          npm run buildon/json",
				},
				body: formDataToSend,
			});
			const result = await response.json();
			if (result.ok) {
				toast({
					title: "Message Sent! ✉️",
					description: "Thank you for reaching out. I'll get back to you soon!",
				});
				setFormData({ name: "", email: "", subject: "", message: "" });
			} else {
				toast({
					title: "Error",
					description: result.error || "Failed to send message. Please try again later.",
				});
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to send message. Please try again later.",
			});
		}
		setIsSubmitting(false);
	};

	return (
		<section id="contact" className="py-24 relative">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(262_83%_58%_/_0.08),_transparent_50%)]" />

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="text-center mb-16">
					<p className="text-primary font-mono text-sm mb-4">GET IN TOUCH</p>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
					<p className="text-muted-foreground max-w-xl mx-auto">
						I'm currently open to new opportunities. Whether you have a question or just want to say hi,
						I'll do my best to get back to you!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Info */}
					<div className="space-y-8">
						<div className="glass p-8 rounded-xl">
							<h3 className="text-xl font-semibold mb-6">Let's Connect</h3>

							<div className="space-y-4">
								{contactInfo.map((item) => (
									<div key={item.label} className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
											<item.icon className="text-primary" size={20} />
										</div>
										<div>
											<p className="text-sm text-muted-foreground">{item.label}</p>
											{item.href ? (
												<a
													href={item.href}
													className="font-medium hover:text-primary transition-colors"
												>
													{item.value}
												</a>
											) : (
												<p className="font-medium">{item.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Social Links */}
						<div className="glass p-8 rounded-xl">
							<h3 className="text-xl font-semibold mb-6">Follow Me</h3>
							<div className="space-y-4">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-all duration-300 group"
									>
										<div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
											<social.icon size={20} className="group-hover:text-primary transition-colors" />
										</div>
										<div>
											<p className="font-medium">{social.label}</p>
											<p className="text-sm text-muted-foreground">{social.username}</p>
										</div>
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="glass p-8 rounded-xl">
						<h3 className="text-xl font-semibold mb-6">Send a Message</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium mb-2">Name</label>
									<input
										type="text"
										required
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">Email</label>
									<input
										type="email"
										required
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium mb-2">Subject</label>
								<input
									type="text"
									required
									value={formData.subject}
									onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
									className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
									placeholder="How can I help you?"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium mb-2">Message</label>
								<textarea
									required
									rows={5}
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
									placeholder="Your message..."
								/>
							</div>

							<div className="mb-4 flex justify-center">
								<HCaptcha
									sitekey="4d88979c-68b6-4b98-a0ea-f9c2e1d2f9a6"
									onVerify={(token) => setCaptchaToken(token)}
								/>
							</div>

							<Button
								type="submit"
								variant="hero"
								size="lg"
								className="w-full"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									"Sending..."
								) : (
									<>
										<Send size={18} />
										Send Message
									</>
								)}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
