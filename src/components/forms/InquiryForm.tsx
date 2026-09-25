import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../../data/site";

const field =
  "w-full border-0 border-b border-ink/40 bg-transparent py-3 text-[1.05rem] text-ink outline-none transition-colors duration-300 placeholder:text-ink-mute focus:border-signal";

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label text-ink-soft">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      <input name={name} type={type} required={required} className={field} autoComplete="off" />
    </label>
  );
}

/** The single enquiry form used across the site. */
export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (name: string) =>
    setPicked((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[22rem] flex-col items-start justify-center gap-5">
        <span className="grid size-12 place-items-center rounded-full bg-signal text-paper">
          <Check className="size-5" strokeWidth={1.8} />
        </span>
        <p className="display-s">Received. Thank you.</p>
        <p className="max-w-[38ch] text-ink-soft">
          We'll read what you've shared and come back within two business days with a clear next
          step.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setPicked([]);
          }}
          className="label navlink"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      {!compact && (
        <div className="grid gap-7 sm:grid-cols-2">
          <Field name="company" label="Company" />
          <Field name="phone" label="Phone" type="tel" />
        </div>
      )}

      <fieldset>
        <legend className="label text-ink-soft">What do you need help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...services.map((s) => s.name), "Not sure yet"].map((name) => {
            const on = picked.includes(name);
            return (
              <button
                key={name}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(name)}
                className={`label border px-3 py-2 transition-colors duration-300 ${on ? "border-ink bg-ink text-paper" : "border-ink/40 hover:border-ink"}`}
              >
                {name}
              </button>
            );
          })}
        </div>
        {picked.map((p) => (
          <input key={p} type="hidden" name="services" value={p} />
        ))}
      </fieldset>

      <label className="block">
        <span className="label text-ink-soft">
          Tell us about it<span className="text-signal"> *</span>
        </span>
        <textarea
          name="message"
          rows={compact ? 3 : 5}
          required
          className={`${field} resize-none`}
        />
      </label>

      <button type="submit" className="pill label bg-ink text-paper hover:border-signal">
        Send enquiry
        <ArrowUpRight className="size-4" strokeWidth={1.6} />
      </button>
    </form>
  );
}
